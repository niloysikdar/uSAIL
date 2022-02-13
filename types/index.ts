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
  kpiScore: number;
  appraisal: number;
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
}
