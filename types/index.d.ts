export interface Config {
  config: {
    registry: boolean;
  };
  contactPerson: {
    email: string;
    name: string;
    phone: string;
  };
  details: {
    dateTime: string;
    venue: string;
    venueURL: string;
  };
  party: {
    members: string[];
    name_1: string;
    name_2: string;
  };
  table: {
    head: boolean;
    headSize: number;
    tableSize: number;
    tables: number;
  };
  title: string;
}
