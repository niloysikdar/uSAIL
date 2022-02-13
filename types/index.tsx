export interface UserDetailsType {
  id: number;
  name: string;
  image: string;
  age: number;
  gender: string;
  teamKey: string;
  teamName: string;
  email: string;
  accessKey: string;
}

export interface CategoryDataType {
  id: number;
  name: string;
  description: string;
  totalPoints: number;
  weeklyData: number[];
  score: number;
  remark: string;
}

export interface UserType extends UserDetailsType {
  data: CategoryDataType[];
  kpiScore: number;
  appraisal: number;
}
