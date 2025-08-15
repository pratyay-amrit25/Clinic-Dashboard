export const adminData = {
  revenue: {
    total: 125430,
    change: 12.5, // percentage change from last month
    trend: [
      { name: 'Jan', revenue: 18000 },
      { name: 'Feb', revenue: 22000 },
      { name: 'Mar', revenue: 25000 },
      { name: 'Apr', revenue: 23000 },
      { name: 'May', revenue: 28000 },
      { name: 'Jun', revenue: 31000 },
    ],
  },
  patients: {
    new: 45,
    returning: 189,
    acquisitionTrend: [
      { name: 'Jan', new: 30, returning: 150 },
      { name: 'Feb', new: 35, returning: 160 },
      { name: 'Mar', new: 40, returning: 170 },
      { name: 'Apr', new: 38, returning: 175 },
      { name: 'May', new: 42, returning: 180 },
      { name: 'Jun', new: 45, returning: 189 },
    ],
    retentionRate: 81, // percentage
  },
  staff: {
    utilization: 76, // overall percentage
    byRole: [
      { role: 'Doctors', utilization: 85, color: '#8884d8' },
      { role: 'Nurses', utilization: 78, color: '#82ca9d' },
      { role: 'Support Staff', utilization: 65, color: '#ffc658' },
    ],
  },
  insuranceClaims: {
    pending: 15,
    approved: 120,
    rejected: 8,
    claims: [
      { id: 'CLM001', patient: 'John Doe', amount: 500, status: 'Approved' },
      { id: 'CLM002', patient: 'Jane Smith', amount: 750, status: 'Pending' },
      { id: 'CLM003', patient: 'Peter Jones', amount: 300, status: 'Rejected' },
      { id: 'CLM004', patient: 'Mary Johnson', amount: 1200, status: 'Approved' },
      { id: 'CLM005', patient: 'David Williams', amount: 900, status: 'Pending' },
    ],
  },
  operational: {
    avgWaitTime: {
      current: '22 min',
      change: -3, // change in minutes from last week
    },
    busiestDay: 'Wednesday',
    roomOccupancy: 85, // percentage
    bottlenecks: [
      { metric: 'Longest Wait Time', value: '45 min', department: 'Cardiology' },
      { metric: 'Peak Congestion Time', value: '11:00 AM - 12:00 PM' },
      { metric: 'Underutilized Resource', value: 'Room 5', details: 'Used only 3 hours/day' },
    ]
  },
  sales: {
    total: 450, // Number of services/procedures sold this month
    change: 8.2,
    trend: [
      { name: 'Jan', sales: 300 },
      { name: 'Feb', sales: 350 },
      { name: 'Mar', sales: 400 },
      { name: 'Apr', sales: 380 },
      { name: 'May', sales: 420 },
      { name: 'Jun', sales: 450 },
    ]
  }
};

export const doctorData = {
  patientQueue: [
    { id: 'PAT001', name: 'Alice Johnson', time: '09:00 AM', reason: 'Follow-up', status: 'Waiting' },
    { id: 'PAT002', name: 'Bob Williams', time: '09:15 AM', reason: 'New Problem', status: 'In Consultation' },
    { id: 'PAT003', name: 'Charlie Brown', time: '09:30 AM', reason: 'Regular Checkup', status: 'Waiting' },
    { id: 'PAT004', name: 'Diana Miller', time: '09:45 AM', reason: 'Follow-up', status: 'Completed' },
  ],
  medicalHistories: {
    'PAT001': {
      allergies: ['Peanuts', 'Penicillin'],
      medications: [{ name: 'Lisinopril', dosage: '10mg daily' }],
      pastTreatments: [{ date: '2023-05-10', diagnosis: 'Hypertension', treatment: 'Prescribed Lisinopril' }],
      bmi: 24.5,
      notes: 'Patient is responding well to treatment. Blood pressure is stable.'
    },
    'PAT002': {
      allergies: ['None'],
      medications: [],
      pastTreatments: [],
      bmi: 22.1,
      notes: 'New patient. Complaining of persistent headaches.'
    },
    'PAT003': {
        allergies: ['None'],
        medications: [{ name: 'Metformin', dosage: '500mg twice daily' }],
        pastTreatments: [{ date: '2022-11-20', diagnosis: 'Type 2 Diabetes', treatment: 'Prescribed Metformin and dietary changes' }],
        bmi: 29.8,
        notes: 'Routine checkup for diabetes management.'
    },
  },
  labReports: [
    { id: 'LAB001', patientId: 'PAT003', patientName: 'Charlie Brown', test: 'A1C Level', date: '2025-08-14', status: 'New' },
    { id: 'LAB002', patientId: 'PAT001', patientName: 'Alice Johnson', test: 'Lipid Panel', date: '2025-08-12', status: 'Viewed' },
  ],
  alerts: [
    { id: 'ALERT01', type: 'Emergency', message: 'Cardiac emergency in Room 3. Assistance required.', severity: 'critical' },
    { id: 'ALERT02', type: 'Lab Report', message: 'New lab results for Charlie Brown.', severity: 'high' }
  ]
};

export const nurseData = {
  triageList: [
    { id: 'TRI001', patientName: 'Kevin Hart', arrival: '11:30 AM', complaint: 'Chest pain', priority: 'High' },
    { id: 'TRI002', patientName: 'Olivia Wilde', arrival: '11:45 AM', complaint: 'Sprained ankle', priority: 'Medium' },
    { id: 'TRI003', patientName: 'Liam Neeson', arrival: '11:50 AM', complaint: 'Sore throat', priority: 'Low' },
  ],
  patientVitals: [
    { patientId: 'PAT002', patientName: 'Bob Williams', room: '101', vitals: { bp: '120/80', hr: 75, temp: '98.6°F', spo2: '98%' } },
    { patientId: 'PAT005', patientName: 'Ethan Davis', room: '102', vitals: { bp: '140/90', hr: 88, temp: '99.1°F', spo2: '96%' } },
    { patientId: 'PAT007', patientName: 'Grace Lee', room: '104', vitals: { bp: '110/70', hr: 68, temp: '98.4°F', spo2: '99%' } },
  ],
  medsDue: [
    { patientName: 'Bob Williams', room: '101', medication: 'Aspirin 81mg', time: '12:00 PM' },
    { patientName: 'Ethan Davis', room: '102', medication: 'Metoprolol 25mg', time: '12:00 PM' },
    { patientName: 'Sarah Connor', room: '105', medication: 'Ibuprofen 200mg', time: '01:00 PM' },
  ],
  roomAvailability: {
    total: 20,
    occupied: 12,
    available: 8,
  },
  alerts: [
    { id: 'ALERT01', type: 'Emergency', message: 'Cardiac emergency in Room 3. Assistance required.', severity: 'critical' },
    { id: 'ALERT03', type: 'Vitals', message: 'Patient in Room 102 has elevated heart rate.', severity: 'high' },
  ]
};

export const globalData = {
  patients: [
    { id: 'PAT001', name: 'Alice Johnson', age: 34, gender: 'Female' },
    { id: 'PAT002', name: 'Bob Williams', age: 52, gender: 'Male' },
    { id: 'PAT003', name: 'Charlie Brown', age: 28, gender: 'Male' },
    { id: 'PAT004', name: 'Diana Miller', age: 45, gender: 'Female' },
    { id: 'PAT005', name: 'Ethan Davis', age: 61, gender: 'Male' },
    { id: 'PAT006', name: 'Fiona Garcia', age: 39, gender: 'Female' },
    { id: 'PAT007', name: 'George Harris', age: 48, gender: 'Male' },
    { id: 'PAT008', name: 'Helen Clark', age: 33, gender: 'Female' },
    { id: 'PAT009', name: 'Kevin Hart', age: 42, gender: 'Male' },
    { id: 'PAT010', name: 'Olivia Wilde', age: 38, gender: 'Female' },
    { id: 'PAT011', name: 'Liam Neeson', age: 69, gender: 'Male' },
    { id: 'PAT012', name: 'Sarah Connor', age: 35, gender: 'Female' },
  ],
  doctors: [
    { id: 'DOC01', name: 'Dr. Smith', specialty: 'Cardiologist' },
    { id: 'DOC02', name: 'Dr. Jones', specialty: 'General Physician' },
    { id: 'DOC03', name: 'Dr. Evans', specialty: 'Dermatologist' },
    { id: 'DOC04', name: 'Dr. White', specialty: 'Dentist' },
  ]
};

export const receptionistData = {
  todaysAppointments: [
    { id: 'APP001', time: '09:00 AM', patient: { name: 'Alice Johnson', age: 34, gender: 'Female' }, doctor: 'Dr. Smith', reason: 'Regular Checkup', status: 'Confirmed' },
    { id: 'APP002', time: '09:30 AM', patient: { name: 'Bob Williams', age: 52, gender: 'Male' }, doctor: 'Dr. Jones', reason: 'Follow-up', status: 'Checked-In' },
    { id: 'APP003', time: '10:00 AM', patient: { name: 'Charlie Brown', age: 28, gender: 'Male' }, doctor: 'Dr. Smith', reason: 'New Problem', status: 'Completed' },
    { id: 'APP004', time: '10:30 AM', patient: { name: 'Diana Miller', age: 45, gender: 'Female' }, doctor: 'Dr. Evans', reason: 'Regular Checkup', status: 'Confirmed' },
    { id: 'APP005', time: '11:00 AM', patient: { name: 'Ethan Davis', age: 61, gender: 'Male' }, doctor: 'Dr. Smith', reason: 'New Problem', status: 'Cancelled' },
    { id: 'APP006', time: '11:30 AM', patient: { name: 'Fiona Garcia', age: 39, gender: 'Female' }, doctor: 'Dr. Jones', reason: 'Follow-up', status: 'Confirmed' },
  ],
  waitlist: [
    { id: 'WL001', patient: { name: 'George Harris' }, reason: 'Walk-in', addedAt: '10:15 AM' },
    { id: 'WL002', patient: { name: 'Helen Clark' }, reason: 'Follow-up', addedAt: '10:45 AM' },
  ],
  stats: {
    checkedIn: 1,
    confirmed: 2,
    completed: 1,
    onWaitlist: 2,
  },
  doctors: [
    { id: 'DOC01', name: 'Dr. Smith', specialty: 'Cardiologist', status: 'Available' },
    { id: 'DOC02', name: 'Dr. Jones', specialty: 'General Physician', status: 'Busy' },
    { id: 'DOC03', name: 'Dr. Evans', specialty: 'Dermatologist', status: 'Available' },
    { id: 'DOC04', name: 'Dr. White', specialty: 'Dentist', status: 'On Break' },
  ],
  emergencies: [
    { id: 'EMG01', type: 'Cardiac', patient: 'John Appleseed', time: '10:55 AM', severity: 'Critical' },
    { id: 'EMG02', type: 'Allergic Reaction', patient: 'Jane Doe', time: '11:10 AM', severity: 'High' },
  ]
};
