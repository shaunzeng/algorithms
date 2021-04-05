/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if (!intervals || intervals.length === 0) return 0;
    if (intervals.length === 1) return 1;

    // sort meetings by start time, whichever starts earlier is at the first
    intervals.sort((a, b) => a[0] - b[0]);

    // create an room that hosts the first meeting
    const rooms = [intervals[0]];

    // loop thru the rest of the meetings
    for (let i = 1; i < intervals.length; i++) {

        const meeting = getEearliestEndedMeeting(rooms), // get the meeting that ends first
            curr = intervals[i]; // get current meeting

        if (meeting[1] <= curr[0]) { // if earlied ended meeting ends before current meeting, we use the same room, but extend its meeting end time;
            meeting[1] = curr[1];
        } else {
            rooms.push(curr); // if earliest ended meeting ends after the current meeting, we start a new room
        }
    }

    return rooms.length

};


function getEearliestEndedMeeting(rooms) {
    rooms.sort((a, b) => a[1] - b[1]);
    return rooms[0]; // return the meeting that ends earliest;
}