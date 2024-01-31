export const openAlert = (id: string) => {
  const alertConfirm = document.getElementById(id) as HTMLDialogElement | null
  if (alertConfirm) {
    alertConfirm.showModal()
  }
}