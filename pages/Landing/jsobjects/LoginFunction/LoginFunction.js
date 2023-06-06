export default {
	async loginFunction () {
		LoginAPI.run().then(async ()=>{
			const jwt = LoginAPI?.data?.jwt;

			if(jwt){
				await storeValue('jwt', jwt)
				showAlert('Logged in','success')
				navigateTo("Home", {})
			}else{
				showAlert("Invalid login credentials", "error")
			}
		})
	},

	async checkLogin(){
		storeValue('loaded',false)

		CheckLogin.run().then(()=>{
			let email = CheckLogin?.data?.email

			if(email){
				navigateTo("Home",{})
			}else{}
		}).catch(()=>{
			storeValue('loaded',true)
		})
	}

}