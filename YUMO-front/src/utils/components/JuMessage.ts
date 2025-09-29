import { ElMessage } from "element-plus";
const JuMessage = function (options: any) {
  ElMessage({
    offset: 100,
    ...options,
  });
};

JuMessage.info = function (msg: string, options?: any) {
  ElMessage({
    offset: 100,
    message: msg,
    ...options,
  });
};

JuMessage.success = function (msg: string, options?: any) {
  ElMessage({
    offset: 100,
    type: "success",
    message: msg,
    ...options,
  });
};
JuMessage.error = function (msg: string, options?: any) {
  ElMessage({
    offset: 100,
    type: "error",
    message: msg,
    plain: true,
    ...options,
  });
};
JuMessage.warning = function (msg: string, options?: any) {
  ElMessage({
    offset: 100,
    type: "warning",
    message: msg,
    plain: true,
    ...options,
  });
};
export { JuMessage };
