# Simulation of Serial ASCII text communication

The project contains 2 simple NodeJs applications simulating the behavior of a DEVICE and a DRIVER.
The driver send some query commands in ASCII text, The device parses this ASCII text and resturn the response back to driver if the command is valid.
The Net module of Node.js is used to form the connection between device and driver applications.

## Getting Started

### Installing and running device application
```
cd device
npm i
npm run start
```

### Installing and running driver application
```
cd driver
npm i
npm run start
```

## Overview of the project
    * The device provides a certain set of information related to itself
    * This information can be static or computed over a period of time
    * For the simplicity of this challenge, static values have been used
    * The driver has the function of sending different commands to the device
    * The device then responds with the result if the command is valid
    * The different commands currently supported are:
        ```
        "N" - To fetch the device name
        "S" - To fetch the device serial number
        "ST" - To fetch the device status
        "CIC" - To fetch the current items placed in the device
        "MIC" - To fetch the max items that can be placed in the device
        "E" - To disconnect the driver from device
        ```
    * The console output on each terminal shows the flow of operation between device and driver

## Time Spent
    * Investigation/Research - 4 hours
        - ASCII based serial communication
        - Net modules
        - Understanding the challenge
    * Implementing & refactoring the code - 2 hours

## Authors

* **Suraj Singh** - *Initial work* - [GitHub](https://github.com/rssuraj)