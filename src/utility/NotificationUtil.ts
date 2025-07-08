const updateNotificationCount = (id: string, count: number) => {
  const event = new CustomEvent("updateNotification", {
    detail: { id, count },
  });
  window.dispatchEvent(event);
};

export default updateNotificationCount;
