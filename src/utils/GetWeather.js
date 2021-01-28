const baseUrl = 'api.openweathermap.org/data/2.5/weather?';

const GetWeather = () = > {
  async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (e) {
    console.log(e);
  }
}
}