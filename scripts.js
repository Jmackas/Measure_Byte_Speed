function algorithm() {
    // Variable declarations
    var byteInput;
    var transferSize;
    var byteOutput;

    // Retrieve user input
    byteInput = document.getElementById("byte_input").value;
    transferSize = document.getElementById("transfer_size").value;

    // Algorithm
    byteOutput = byteInput;

    // Output to user
    document.getElementById("byte_output").value = byteOutput;
}