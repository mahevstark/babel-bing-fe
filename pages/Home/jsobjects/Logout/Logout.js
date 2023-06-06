export default {
	async logout() {
		storeValue('jwt',null)
		showAlert("Logged out!", 'info')
		navigateTo("Landing",{})
	}
}