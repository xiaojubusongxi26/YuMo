import { JuMessage } from "@/utils/components/JuMessage";
import type { Directive } from "vue";
export default <Directive>{
  mounted(el, binding) {
    // 设置鼠标样式为指针，表明可点击
    el.style.cursor = "pointer";

    // 添加点击事件监听器
    el.addEventListener("click", () => {
      // 获取要复制的文本
      let textToCopy = "";

      if (typeof binding.value === "string") {
        textToCopy = binding.value;
      } else if (typeof binding.value === "object" && binding.value.text) {
        textToCopy = binding.value.text;
      } else {
        // 如果没有提供文本，尝试获取元素的文本内容
        textToCopy = el.textContent.trim();
      }

      // 复制文本到剪贴板
      copyToClipboard(textToCopy)
        .then(() => {
          // 复制成功处理
          handleSuccess(el, binding);
        })
        .catch((err) => {
          // 复制失败处理
          handleError(el, binding, err);
        });
    });
  },

  updated(el, binding) {
    // 指令值更新时，可以更新相关逻辑
    // 这里可以根据需要添加更新逻辑
  },

  unmounted(el) {
    // 清理事件监听器
    el.removeEventListener("click", () => {});
  },
};

// 复制到剪贴板的函数
async function copyToClipboard(text: string) {
  try {
    // 使用现代 Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    // 降级方案：使用 textarea 和 execCommand
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // 使 textarea 不在视口中显示
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    // 执行复制命令
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);

    if (!successful) {
      throw new Error("复制失败");
    }
  } catch (err) {
    console.error("复制失败:", err);
    throw err;
  }
}

// 复制成功处理
function handleSuccess(el: any, binding: any) {
  // 如果有成功回调，执行它
  if (typeof binding.value === "object" && binding.value.success) {
    binding.value.success();
    return;
  }

  // 默认成功提示
  showFeedback(el, "复制成功!", "success");
}

// 复制失败处理
function handleError(el: any, binding: any, error: string) {
  console.error("复制失败:", error);

  // 如果有错误回调，执行它
  if (typeof binding.value === "object" && binding.value.error) {
    binding.value.error(error);
    return;
  }

  // 默认错误提示
  showFeedback(el, "复制失败，请手动复制", "error");
}

// 显示反馈信息
function showFeedback(el: any, message: string, type = "success") {
  JuMessage.info("✨ 复制成功", {
    icon: "none",
    duration: 1000,
  });
  return;
  // 创建反馈元素
  const feedback = document.createElement("div");
  feedback.textContent = message;
  feedback.style.position = "absolute";
  feedback.style.background = type === "success" ? "#4caf50" : "#f44336";
  feedback.style.color = "white";
  feedback.style.padding = "8px 12px";
  feedback.style.borderRadius = "4px";
  feedback.style.fontSize = "14px";
  feedback.style.zIndex = "10000";
  feedback.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.15)";

  // 定位反馈元素
  const rect = el.getBoundingClientRect();
  feedback.style.top = `${rect.top - 40}px`;
  feedback.style.left = `${rect.left + rect.width / 2 - 80}px`;

  document.body.appendChild(feedback);

  // 2秒后移除反馈
  setTimeout(() => {
    if (document.body.contains(feedback)) {
      document.body.removeChild(feedback);
    }
  }, 2000);
}
