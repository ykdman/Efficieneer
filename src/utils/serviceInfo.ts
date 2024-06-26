type TServieceInfo = {
  title: string;
  path: string;
  description: string;
}[];

export const servieInfo: TServieceInfo = [
  {
    title: "Todos",
    path: "/todos",
    description: "할 일을 기록하고 완수하세요!",
  },
  { title: "Calender", path: "/calender", description: "스케쥴을 확인하세요!" },
  { title: "Notes", path: "/notes", description: "간단히 메모를 시작하세요!" },
];
