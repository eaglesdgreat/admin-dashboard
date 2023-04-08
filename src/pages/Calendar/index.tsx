import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "components/Header";
import { tokens } from "theme";
import { useState } from "react";
import { formatDate, EventApi } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";


const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [currentEvent, setCurrentEvent] = useState<Array<EventApi>>([]);

  const handleDateClick = (selected: any) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      })
    }
  }

  const handleEventClick = (selected: any) => {
    if (window.confirm(`Are you sure you want to delete the selected event ${selected.event.title}`)) {
      selected.event.remove();
    }
  }

  return (
    <Box mt="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Calendar"
          subTitle="Full Calendar Interactive Page"
        />
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          style={{ background: colors.primary[400] }}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvent.map((event: any) => (
              <ListItem
                key={event.id}
                sx={{ 
                  backgroundColor: colors.greenAccent[500],
                  m: "10px 0",
                  borderRadius: "4px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {
                        formatDate(
                          event.start,
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )
                      }
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              listPlugin,
              interactionPlugin
            ]}
            headerToolbar={{ 
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(event) => setCurrentEvent(event)}
            initialEvents={[
              { id: "1234", title: "All-day event", date: "2023-04-08"},
              { id: "4321", title: "Timed event", date: "2023-04-06"},
            ]}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Calendar;
