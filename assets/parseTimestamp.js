

const parseTimestamp = timestampString => {
    const timestampDate = new Date(parseInt(timestampString))
    return timestampDate.toString().slice(0, 24)
}

export default parseTimestamp