export type ServiceLocation = {
  name: string;
  branch?: string;
};

// Placeholder locations — replace with confirmed serviceable areas / branches.
export const locations: ServiceLocation[] = [
  { name: "Civil Lines" },
  { name: "Rajendra Nagar" },
  { name: "Model Town" },
  { name: "Izatnagar" },
  { name: "Cantt Area" },
  { name: "Prem Nagar" },
];
