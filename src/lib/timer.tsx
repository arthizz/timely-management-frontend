type TimeData = {

    user_id: number;
    totalTime: number;
    reason: string

}

const fetchTime = async (user_id: TimeData["user_id"]): Promise<TimeData> => {

    const res = await fetch(`/api/timer/${user_id}`);
    if(res.ok) throw new Error("No current Time saved");

    return res.json();

}

const setUserTimeIn = async(request: TimeData) => {

    const res = await fetch("/api/timer/set-timer", {

        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(request)

    })

    if(!res.ok) throw new Error("User failed to time in");

    return res.json();

}

const updateUserTimer = async(request: TimeData) => {
    const user_id = request.user_id;
    const res = await fetch(`/api/timer/update-timer/${user_id}`, {

        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(request)

    })

    if(!res.ok) throw new Error("User failed to Update Timer");

    return res.json();

}

export { fetchTime, setUserTimeIn, updateUserTimer }