// Список курсов
let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function filterCourses() {
  const filterByRange1 = [];
  const filterByRange2 = [];
  const filterByRange3 = [];

  // first variant of sorting
  courses.forEach(course => {
    if (
      course.prices.filter(
        price => price >= requiredRange1[0] && price <= requiredRange1[1]
      )
    ) {
      filterByRange1.push(course.name);
    }
  });

  // second variant of sorting
  for(let i = 0; i < courses.length; i++) {
    if(
      courses[i].prices[0] >= requiredRange2[0]
      && courses[i].prices[1] <= requiredRange2[1]
    ) {
      filterByRange2.push(courses[i].name);
    }
  }
}

filterCourses();