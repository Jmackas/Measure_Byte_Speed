function algorithm() {
    // Variable declarations
    var byteInput;
    var byteOutput;

    // Retrieve user input
    byteInput = document.getElementById("byte_input").value;
    byteOutput = document.getElementById("byte_output").value;

    // Algorithm
    byteOutput = byteInput;

    // Output to user
    document.getElementById("byte_output").value = byteOutput;
}