import { http, HttpResponse } from 'msw';

// 더미 데이터 생성
const dummySchedules ={
   schedules : [
  { "scheduleId": 4,
    "title": "면접 준비",
    "time" : "오전 7:30",
    "checked" : true
  },
  { "scheduleId": 5,
    "title": "CMC 면접",
    "time" : "오전 8:30",
    "checked" : false,
  }
  ]
}

const mockCounts = {
  scheduleCounts: [
    {
      date: "2025-06-15",
      counts: 2,
      status: "IN_PROGRESS",
    },
    {
      date: "2025-06-16",
      counts: 0,
      status: "NONE",
    },
    {
      date: "2025-06-17",
      counts: 5,
      status: "IN_PROGRESS",
    },
    {
      date: "2025-06-18",
      counts: 0,
      status: "DONE",
    },
    {
      date: "2025-06-19",
      counts: 3,
      status: "IN_PROGRESS",
    },
    {
      date: "2025-06-20",
      counts: 8,
      status: "IN_PROGRESS",
    },
    {
      date: "2025-06-21",
      counts: 2,
      status: "IN_PROGRESS",
    },
  ]
};

const baseURL = import.meta.env.VITE_BASE_SERVER_URL;

export const handlers = [
  // 포스트 목록
  http.get('/schedules?year=2025&month=3&day=21', () => {
    return HttpResponse.json(dummySchedules);
  }),

  http.get(`${baseURL}/schedules/counts`, () => {
    return HttpResponse.json(mockCounts)
  })
];