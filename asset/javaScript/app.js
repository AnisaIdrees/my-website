import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail 
} from "./firebase.configure.js"






////------------------------------------- register/ signup----------------------------------------------////
const register = async (ele) => {
    ele.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);

    try {
        let userCredintial = await createUserWithEmailAndPassword(
            auth,
            email,
            password);
        let userInfo = userCredintial?.user
        console.log(userInfo.uid);

        Swal.fire({
            title: "🎉 Sign-Up Successful!",
            text: "Welcome " + email,
            icon: "success",
            confirmButtonText: "OK",
        });

    }
    catch (error) {
        console.log(error.message);
        Swal.fire({
            title: "❌ Error!",
            text: error.message,
            icon: "error",
            confirmButtonText: "Try Again",
        });
    }
}

document.getElementById('signUpBtn')?.addEventListener('click', register)
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////

////------------------------------------- login/ signIn----------------------------------------------////

const login = async (ele) => {
    ele.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);





    try {
        let userLogin = await signInWithEmailAndPassword(
            auth,
            email,
            password)
        const user = userLogin.user;
        console.log(user);

        Swal.fire({
            title: "✅ Login Successful!",
            text: "Welcome back ! " + email,
            icon: "success",
            confirmButtonText: "OK",
        });


    }
    catch (error) {
        console.log(error.message);
        Swal.fire({
            title: "❌ Login Failed!",
            text: error.message,
            icon: "error",
            confirmButtonText: "Try Again",
        });

    }
}

document.getElementById('loginBtn')?.addEventListener('click', login);

////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////

////------------------------------------- login with  google----------------------------------------------////

const provider = new GoogleAuthProvider();


provider.setCustomParameters({ prompt: "select_account" });

const signWithGoogle = async () => {

    try {
        const result = await signInWithPopup(auth, provider)
        console.log("user google sy signIn hochuka hai.");
        console.log(result.user);

        Swal.fire({
            title: "🎉 Google Sign-In Successful!",
            text: "Welcome, " + result.user.displayName,
            icon: "success",
            confirmButtonText: "OK",
        });

    } catch (error) {
        console.log(error.message);
    }
};

document.getElementById("sigInWithGoogle")?.addEventListener("click", signWithGoogle);
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
/////-------------------------------------logout------------------------------------------//////

document.getElementById("signOut")?.addEventListener("click", async () => {
    try {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, Logout",
            cancelButtonText: "Cancel"
        });

        if (result.isConfirmed) {
            await signOut(auth);
            Swal.fire("Logged Out!", "You have been logged out successfully.", "success");
            console.log("Logout hogya!");
            
            // Redirect agar zaroori ho toh
            // window.location.href = "login.html";
        }
    } catch (error) {
        Swal.fire("Error!", "Logout nahi hua. Please try again.", "error");
        console.log("Logout nahiiiiii hua!", error);
    }
});


////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////

/////-------------------------------------forgot password----------------------------------------//////


const forgotPassword = async () => {
    const email = document.getElementById("email").value;

    if (!email) {
        Swal.fire({
            title: "⚠️ Error!",
            text: "Please enter your email address.",
            icon: "warning",
            confirmButtonText: "OK",
        });
        return;
    }

    try {
        await sendPasswordResetEmail(auth, email);
        Swal.fire({
            title: "📧 Email Sent!",
            text: "Check your inbox for the password reset link.",
            icon: "success",
            confirmButtonText: "OK",
        });
    } catch (error) {
        Swal.fire({
            title: "❌ Error!",
            text: error.message,
            icon: "error",
            confirmButtonText: "Try Again",
        });
        console.log(error.message);
    }
};

document.getElementById("forgotPswrd")?.addEventListener("click", forgotPassword);
