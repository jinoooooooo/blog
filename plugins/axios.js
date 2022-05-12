import { notification } from "ant-design-vue/lib";
export default function({ $axios }) {
  $axios.onResponse(res => {
    if (res.status !== 200) {
      notification.error({
        message: "后台出现错误",
        description: "请您去喝杯🍵，待会再试试吧"
      });
    } else {
      return res.data;
    }
  });

  // $axios.onError(error => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code === 400) {
  //     redirect('/400')
  //   }
  // })
}
