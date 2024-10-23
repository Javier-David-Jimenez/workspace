const { updateTimer, startTimer, stopTimer } = require('./ejercicio109');

jest.useFakeTimers();

describe('Timer Functionality Tests', () => {

    beforeEach(() => {
        
        minutes = 0;
        seconds = 0;
        isRunning = false;
        clearInterval(interval);
    });

    test('The updateTimer function should increment seconds correctly', () => {
        
        expect(updateTimer()).toEqual({ minutes: "00", seconds: "01" });
    });

    test('The updateTimer function should increment minutes after 60 seconds', () => {
        
        for (let i = 0; i < 60; i =+ 1) {
            updateTimer();
        }
        expect(updateTimer()).toEqual({ minutes: "01", seconds: "00" });
    });

    test('The startTimer function should start the interval', () => {
        startTimer();
        expect(isRunning).toBe(true);

        jest.advanceTimersByTime(2000);
        expect(updateTimer()).toEqual({ minutes: "00", seconds: "03" }); // 2 more seconds passed
    });

    test('The stopTimer function should stop the timer', () => {
        startTimer();
        stopTimer();
        expect(isRunning).toBe(false);
    });

});
