import React, { useEffect, useRef } from 'react';

// Extend the Window interface to include 'calendar'
declare global {
    interface Window {
        calendar?: {
            schedulingButton: {
                load: (options: {
                    url: string;
                    color: string;
                    label: string;
                    target: HTMLElement | null;
                }) => void;
            };
        };
    }
}

const GoogleCalendarButton: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        const script = document.createElement('script');
        script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
        script.async = true;

        script.onload = () => {
            if (window.calendar && window.calendar.schedulingButton) {
                window.calendar.schedulingButton.load({
                    url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2PJ4jJKMXrNATMsOSoU97pmcligIKfDCi4iyPskgXwGySoM_zydrZsx_VDTaytgvr10IeQxyd6?gv=true',
                    color: '#7986CB',
                    label: 'Book an appointment',
                    target: containerRef.current,
                });
            }
        };

        document.body.appendChild(script);

        return () => {
            document.head.removeChild(link);
            document.body.removeChild(script);
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, []);

    return <div ref={containerRef}></div>;
};

export default GoogleCalendarButton;
