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
        // get the meeting that ends first
        const meeting = getEearliestEndedMeeting(rooms);
        // get current meeting
        const curr = intervals[i];
        // if earlied ended meeting ends before current meeting, 
        //we use the same room, but extend its meeting end time;
        if (meeting[1] <= curr[0]) {
            meeting[1] = curr[1];
        } else {
            // if earliest ended meeting ends after the current meeting, 
            //we start a new room
            rooms.push(curr);
        }
    }
    return rooms.length
};

function getEearliestEndedMeeting(rooms) {
    // return the meeting that ends earliest;
    rooms.sort((a, b) => a[1] - b[1]);
    return rooms[0];
}