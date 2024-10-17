const handleFormData = (e: SubmitEvent) => {
  e.preventDefault();
  const target = e.target as HTMLFormElement | null;
  if (!target) {
    throw new Error("Form submission target is null");
  }
  const data = new FormData(target);
  const value = Object.fromEntries(data.entries());
  return value;
};
