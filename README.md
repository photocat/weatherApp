# WeatherApp
Simple RN Weather App with Firebase Auth

## Screen Login
| ![Login Android](https://github.com/photocat/images/blob/main/Screenshot_1611930189.png) | ![Login iOS](https://github.com/photocat/images/blob/main/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202021-01-29%20at%2016.24.55.png) |
|:--:|:--:|
| *Android* | *iOS* |

This screen have two inputs for email and passwords, button for submit, and link to screen "Sign up"
Button disabled until fields "Email" and "Password" have no values.
After submiting application look in Firebase and if user exist and password correct redirect user to Main screen.

## Screen Signup
| ![Login Android](https://github.com/photocat/images/blob/main/Screenshot_1611930216.png) | ![Login iOS](https://github.com/photocat/images/blob/main/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202021-01-29%20at%2016.25.10.png) |
|:--:|:--:|
| *Android* | *iOS* |

This screen has similar functionality to Login screen. But after submiting it will register user to Firebase and redirect him to Main screen.

## Main Screen
| ![Login Android](https://github.com/photocat/images/blob/main/Screenshot_1611930239.png) | ![Login iOS](https://github.com/photocat/images/blob/main/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202021-01-29%20at%2016.25.35.png) |
|:--:|:--:|
| *Android* | *iOS* |

At the top of this screen we have city selector. In middle section screen have main content, were we can see weather in selected city. At the bottom placed "Logout" button, which logout user and redirect him on Login screen.
