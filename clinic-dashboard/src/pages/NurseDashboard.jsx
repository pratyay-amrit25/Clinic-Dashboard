import React from 'react';
import Alerts from '../components/Alerts';
import TriageList from '../components/TriageList';
import VitalsTracker from '../components/VitalsTracker';
import MedsDue from '../components/MedsDue';
import RoomAvailability from '../components/RoomAvailability';
import { nurseData } from '../data/mockData';
import './NurseDashboard.css';

const NurseDashboard = () => {
  const { triageList, patientVitals, medsDue, roomAvailability, alerts } = nurseData;

  return (
    <div className="nurse-dashboard">
      <div className="nurse-main-grid">
        <div className="nurse-left-column">
          <Alerts title="Urgent Alerts" alerts={alerts} />
          <TriageList title="Triage Queue" patients={triageList} />
          <MedsDue title="Medications Due" meds={medsDue} />
        </div>
        <div className="nurse-right-column">
          <RoomAvailability title="Room Availability" rooms={roomAvailability} />
          <VitalsTracker title="Patient Vitals" patients={patientVitals} />
        </div>
      </div>
    </div>
  );
};

export default NurseDashboard;
