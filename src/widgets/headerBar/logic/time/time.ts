import { onMounted, onUnmounted, ref } from "vue";

interface timeI {
  Hours: number;
  Minutes: number;
}

export default (t: number) => {
  let time = ref<timeI>(getDate(t));
  let Interval: any;
  onMounted(() => {
    Interval = setInterval(() => {
      time.value = getDate(t);
    }, 1000);
  });
  onUnmounted(() => {
    clearInterval(Interval);
  });
  return time;
};

function getDate(t: number): timeI {
  const dateTemp = new Date();
  const uts = dateTemp.getTime() + dateTemp.getTimezoneOffset() * 60000;
  const g = new Date(uts + t * 3600000);
  return { Hours: g.getHours(), Minutes: g.getMinutes() };
}
