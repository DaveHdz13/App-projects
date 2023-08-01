# Bin2Dec Project

The Bin2Dec project is a simple application that allows users to convert binary numbers to their decimal equivalents.

![Wireframe](/img/wireframe.png)

## Project Structure

The project consists of three files:

1. `index.html`: This file contains the HTML structure of the application, including an input field, convert button, and a result container.
2. `style.css`: This file contains the CSS styles for the application.
3. `binary.js`: This file contains the JavaScript code responsible for handling the conversion logic.

## JavaScript Logic

The `binary.js` file contains the JavaScript code responsible for handling the conversion logic:

- `convertBinaryToDecimal()`: This function is triggered when the convert button is clicked. It retrieves the binary input value from the input field, validates it using a **regular expression**, and converts it to decimal using `parseInt()` with the `2` **radix parameter**. The result is then displayed in the result container.

The line `const binaryRegex = /^[01]{1,8}$/;` defines a regular expression that is used to validate the binary input entered by the user.

This regular expression consist of 4 parts:

- `^`: Denotes the start of the input string.
- `[01]`: Represents a character class that matches either a `0` or a `1`.
- `{1,8}`: Specifies the allowed range of repetitions. In this case, it means that the character class `[01]` can repeat between 1 and 8 times.
- `$`: Denotes the end of the input string.

So, the regular expression `/^[01]{1,8}$/` ensures that the input string consists of only `0` or `1` characters and has a length between 1 and 8 characters. If there is numbres other than `0` or `1` an alert popup is going to show.

![Alert](/img/alert.png)


# Running the Application

To run the Bin2Dec application use the Live Server extension in VS Code and follow this steps:

1. **Download the repository** by clicking on the "Download ZIP" button and extract the contents to your preferred location on your computer. Alternatively, you can clone the repository using the following command in your terminal or command prompt:

   ```git clone https://github.com/your-username/your-repository.git```

2. Open Visual Studio Code (VS Code) if you haven't already.

3. **Install the Live Server extension**, if you don't have it already. You can do this by going to the Extensions view (click on the Extensions icon in the Activity Bar on the side of VS Code), then search for "Live Server" and click "Install."

4. Once the Live Server extension is installed, open the newly created directory (the one containing the index.html, style.css, and script.js files) in VS Code.

5. In the VS Code file explorer, right-click on the index.html file and select "Open with Live Server." Or you can click on the down left side of VS Code an option called **Go Live** and that should run the local server.

If everything is set up correctly, you can interact with the Bin2Dec application and convert binary numbers to decimal effortlessly. Enjoy! 😁

# FINAL SCREEN

This is how it looks!

![Final-screen](/img/final-screen.png)