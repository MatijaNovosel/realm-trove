interface Toast {
  id: number;
  msg: string;
  color: string;
  permanent: boolean;
}

export default () => {
  const toasts = useState<Toast[]>("toast", () => []);

  const createToast = (
    msg: string,
    color: string,
    timeout = 4000,
    permanent = false
  ) => {
    const id = Math.max(...toasts.value.map((t) => t.id));

    toasts.value.push({
      id,
      msg,
      color,
      permanent
    });

    if (!permanent) {
      setTimeout(() => {
        toasts.value = toasts.value.filter((t) => t.id !== id);
      }, timeout);
    }
  };

  const permanentToastExists = computed(
    () => toasts.value.find((t) => t.permanent === true) !== undefined
  );

  const removePermanentToasts = () => {
    const toastIdx = toasts.value.findIndex((t) => t.permanent === true);
    if (toastIdx !== -1) {
      toasts.value.splice(toastIdx, 1);
    }
  };

  return {
    toasts,
    createToast,
    removePermanentToasts,
    permanentToastExists
  };
};
