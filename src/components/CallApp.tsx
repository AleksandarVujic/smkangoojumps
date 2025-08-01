import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CalApp = () => {
    const { t } = useTranslation();
    const [selectedClass, setSelectedClass] = useState<string | null>(null);



    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "power-jump" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

    return <button
        className={`px-5 py-2 text-sm rounded-full font-medium transition-all duration-300 bg-neutral-100 text-neutral-700 hover:bg-accent-pink hover:text-primary-white shadow-lg'
            }`}
        data-cal-namespace="power-jump"
        data-cal-link="smkangoojumps/power-jump"
        data-cal-config='{"layout":"month_view"}'
    >{t('schedule.bookNow')}</button>;
}
export default CalApp


