/*
Imagine a list of track plays logged by Spotify users across the world. Given a comma-separated ordered list of these events, of the form:

For example:
username,songname,timestamp

const sampleData = `daniel,ShapeOfYou,1519753867' 
'daniel,Perfect,1519753868' i
'martin,ShapeOfYou,1519753869'
'daniel,Thunder,1519753870'
'martin,ShapeOfYou,1519753871'
'martin,Despacito,1519753872'
'martin,ShapeOfYou,1519753873'
'martin,Perfect,1519753874'
'daniel,Despacito,1519753875'
'martin,Thunder,1519753875`;

Imagine a stream of track plays logged by Spotify users around the world. Given an list of these events (ordered by timestamp), fill in the mostCommonSequence method in order to compute the three-play sequence most commonly played by Spotify users, and the number of times the sequence was played.

If no three-play sequences exist (i.e. no individual user plays more than two tracks in the input), then return null.
In the case of a tie for most plays, your function may return either sequence which is tied for having the most plays.

*/

function findTriplets(data) {
    const SEQUENCE_NUMBER = 3;
    
    const userMap = new Map(); //user : [song titles]
    for (let string of data) {
        const [user, song, time] = string.split(',');
        if (!userMap.has(user)) userMap.set(user, []);
        userMap.get(user).push(song);
    }
  
    const seqMap = new Map();
    for (const [user, songs] of userMap) {
      if (songs.length >= 3) {
        for (let i = 0; i <= songs.length - SEQUENCE_NUMBER; i++) {
          const a = songs[i];
          const b = songs[i + 1];
          const c = songs[i + 2];
          
          const sequence = `${a}#${b}#${c}`;
  
          seqMap.set(sequence, (seqMap.get(sequence) || 0) + 1)
        }
      }
    }
    
    let maxFreq = 0;
    let freqSong;
    for (const [sequence, freq] of seqMap) {
      if (freq > maxFreq) {
        maxFreq = freq;
        freqSong = sequence;
      }
    }
  
    freqSong = freqSong.split('#');
    
    return `The most frequently played sequence of ${SEQUENCE_NUMBER} songs is: "${freqSong}" which was played ${maxFreq} times!`
  }
  
  const sampleData = ['daniel,ShapeOfYou,1519753867',
    'daniel,Perfect,1519753868',
    'martin,ShapeOfYou,1519753869',
    'daniel,Thunder,1519753870',
    'martin,ShapeOfYou,1519753871',
    'martin,Despacito,1519753872',
    'martin,ShapeOfYou,1519753873',
    'martin,Perfect,1519753874',
    'daniel,Despacito,1519753875',
    'martin,Thunder,1519753875'];
  
  console.log(findTriplets(sampleData));