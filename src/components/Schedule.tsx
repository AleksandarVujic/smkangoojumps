import { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { PopupButton } from "react-calendly";
import { Trans, useTranslation } from 'react-i18next';
import i18n from '../i18n';
import GoogleCalendarButton from './GoogleCalendarButton';

const Schedule = () => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const classes = [
    {
      id: '1',
      name: 'Beginner Bounce',
      time: '9:00 AM',
      duration: 45,
      instructor: 'SM',
      spots: 8,
      location: 'SM Fitness Studio',
      level: t('schedule.levels.beginner'),
      bookURL: 'https://calendly.com/alex-vujic-pro/training'
    },
    {
      id: '2',
      name: 'Power Jump',
      time: '10:30 AM',
      duration: 60,
      instructor: 'SM',
      spots: 5,
      location: 'SM Fitness Studio',
      level: t('schedule.levels.advanced'),
      bookURL: 'https://calendly.com/alex-vujic-pro/power-jumps'
    },
    {
      id: '3',
      name: 'Dance Bounce',
      time: '6:00 PM',
      duration: 50,
      instructor: 'SM',
      spots: 6,
      location: 'SM Fitness Studio',
      level: t('schedule.levels.intermediate'),
      bookURL: 'https://calendly.com/alex-vujic-pro/dance-bounce'
    },
    {
      id: '4',
      name: 'Gentle Bounce',
      time: '7:30 PM',
      duration: 30,
      instructor: 'SM',
      spots: 10,
      location: 'SM Fitness Studio',
      level: t('kangoo.allLevels'),
      bookURL: 'https://doodle.com/bp/alexandervujic/power-jumps'
    }
  ];

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentWeek = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - date.getDay() + 1 + i);
    return date;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case t('schedule.levels.beginner'): return 'bg-green-100 text-green-700';
      case t('schedule.levels.intermediate'): return 'bg-yellow-100 text-yellow-700';
      case t('schedule.levels.advanced'): return 'bg-red-100 text-red-700';
      default: return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-gradient-to-br from-primary-gray to-primary-beige ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 px-2">
          <span className="inline-block px-4 py-2 bg-accent-gold/10 text-accent-gold rounded-full text-sm font-semibold mb-4">
            {t('schedule.classSchedule')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-black mb-6 break-words">
            <Trans i18nKey="schedule.title" components={{ 1: <span className="text-accent-gold" /> }} />
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {t('schedule.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">

          {/* Calendar */}
          <div className="lg:col-span-1">
            <div className="bg-primary-white rounded-3xl shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-primary-black">
                  {selectedDate.toLocaleDateString(i18n.language, {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric'
                  })}
                </h3>
              </div>

              {/* Week View - Horizontally scrollable on small screens */}
              <div className="overflow-x-auto">
                <div className="grid grid-cols-7 min-w-[28rem] gap-2 mb-6">
                  {weekDays.map((day, index) => (
                    <div key={day} className="text-center">
                      <div className="text-xs text-neutral-500 mb-2">{day}</div>
                      <button
                        disabled
                        onClick={() => setSelectedDate(currentWeek[index])}
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all duration-300 ${selectedDate.toDateString() === currentWeek[index].toDateString()
                          ? 'bg-accent-pink text-primary-white shadow-lg'
                          : 'hover:bg-accent-pink/10 text-neutral-700'
                          }`}
                      >
                        {currentWeek[index].getDate()}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="space-y-4 pt-6 border-t border-neutral-200 text-sm text-neutral-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-accent-pink" />
                  SM Fitness Studio
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-accent-pink" />
                  {t('schedule.equipmentProvided')}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-accent-pink" />
                  {t('schedule.smallGroups')}
                </div>
              </div>
            </div>
          </div>

          {/* Classes List */}
          <div className="lg:col-span-2">
            <div className="bg-primary-white rounded-3xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-primary-black mb-6">
                {t('schedule.availableClasses')}
              </h3>

              <div className="space-y-4">
                {classes.map((classItem) => (
                  <div
                    key={classItem.id}
                    className={`p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${selectedClass === classItem.id
                      ? 'border-accent-pink bg-accent-pink/5'
                      : 'border-neutral-200 hover:border-accent-pink/50 hover:bg-accent-pink/5'
                      }`}
                    onClick={() => setSelectedClass(classItem.id)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-primary-black">{classItem.name}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-neutral-600 mt-1">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {classItem.time}
                          </span>
                          <span>({t('programs.duration', { count: classItem.duration })})</span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {t('schedule.spotsLeft_plural', { count: classItem.spots })}
                          </span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(classItem.level)}`}>
                        {classItem.level}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="text-sm text-neutral-600">
                        <b>{t('schedule.instructor')}</b>{t('common.instructor_sm')} <br /> {t('schedule.location', { place: classItem.location })}
                      </div>
                      {/* <GoogleCalendarButton /> */}
                      <PopupButton
                        className={`px-5 py-2 text-sm rounded-full font-medium transition-all duration-300 ${selectedClass === classItem.id
                          ? 'bg-accent-pink text-primary-white shadow-lg'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-accent-pink hover:text-primary-white'
                          }`}
                        url={classItem.bookURL}
                        rootElement={document.getElementById("root") as HTMLElement}
                        text={t('schedule.bookNow')}
                        pageSettings={{
                          backgroundColor: 'ffffff',
                          hideEventTypeDetails: false,
                          hideLandingPageDetails: false,
                          primaryColor: '00a2ff',
                          textColor: '4d5055'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Schedule;