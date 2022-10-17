interface Toast {
  id: number;
  msg: string;
  color: string;
}

export default () => {
  const toasts = useState<Toast[]>("toast", () => []);

  const createToast = (msg: string, color: string, timeout: number = 4000) => {
    const id = Math.max(...toasts.value.map((t) => t.id));

    toasts.value.push({
      id,
      msg,
      color
    });

    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== id);
    }, timeout);
  };

  return {
    toasts,
    createToast
  };
};
