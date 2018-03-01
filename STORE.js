const STORE = [
//Question 1 - C major
  {
    choice: [
        'A minor',
        'C major',
        
        'D major',
        'G major'
        ],
      givenAnswer:'',
      answer: 'C major',
      questImg: 'http://www.guitar-chords.org.uk/chord-images/c-major-1.gif',
      alt: 'guitar chord (low to high): string 6: do not play, string 5: fret 3, string 4: fret 2, string 3: open, string 2: fret 1, string 1: open',
      resultImg: 'https://guitarlessons-com.s3.amazonaws.com/media/blog/c-major-chord-hr.png',
      alt2: 'Demonstration of hand position for C major chord'
      //incorrectAudio: 
  },
  //Question 2 - E major
  {
    choice: [
        'E major',
        'D minor',
        'B major',
        'C major'
        ],
      answer: 'E major',
      questImg: 'http://www.guitar-chords.org.uk/chord-images/e-major-1.gif',
      alt: 'guitar chord (low to high): string 6: open , string 5: fret 2, string 4: fret 2, string 3: fret 1, string 2: open, string 1: open',
      resultImg: 'https://guitarlessons-com.s3.amazonaws.com/media/blog/e-major-chord-hr.png',
      alt2: 'Demonstration of hand position for E major chord'
  },
  //Question 3 - A major
  {
    choice: [
        'A minor',
        'E major',
        'F major',
        'A major'
        ],
      answer: 'A major',
      questImg: 'http://www.guitar-chords.org.uk/chord-images/a-major-1.gif',
      alt: 'guitar chord (low to high): string 6: do not play, string 5: open, string 4: fret 2, string 3: fret 2, string 2: fret 2, string 1: open',
      resultImg: 'https://guitarlessons-com.s3.amazonaws.com/media/blog/a-major-chord-hr.png',
      alt2: 'Demonstration of hand position for A major chord'
  },
  //Question 4 - D major
  {
    choice: [
        'B minor',
        'A major',
        'D major',
        'F major'
        ],
      answer: 'D major',
      questImg: 'http://www.guitar-chords.org.uk/chord-images/d-major-1.gif',
      alt: 'guitar chord (low to high): string 6: do not play, string 5: do not play, string 4: open, string 3: fret 2, string 2: fret 3, string 1: fret 2',
      resultImg: 'https://guitarlessons-com.s3.amazonaws.com/media/blog/d-major-chord.png',
      alt2: 'Demonstration of hand position for D major chord'
  },
  //Question 5 - E minor
  {
    choice: [
        'G minor',
        'E minor',
        'C major',
        'E major'
        ],
      answer: 'E minor',
      questImg: 'http://www.guitar-chords.org.uk/chord-images/e-minor-1.gif',
      alt: 'guitar chord (low to high): string 6: open, string 5: fret 2, string 4: fret 2, string 3: open, string 2: open, string 1: open',
      resultImg: 'https://guitarlessons-com.s3.amazonaws.com/media/blog/e-minor-chord-hr.png',
      alt2: 'Demonstration of hand position for E minor chord' 
  },
  //Question 6 - A minor
  {
    choice: [
        'A minor',
        'E minor',
        'B major',
        'G major'
        ],
      answer: 'A minor',
      questImg: 'http://www.guitar-chords.org.uk/chord-images/a-minor-1.gif',
      alt: 'guitar chord (low to high): string 6: do not play, string 5: open, string 4: fret 2, string 3: fret 2, string 2: fret 2, string 1: open',
      resultImg: 'https://guitarlessons-com.s3.amazonaws.com/media/blog/a-minor-chord-hr.png',
      alt2: 'Demonstration of hand position for A minor chord' 
  },
  //Question 7 - D minor
  {
    choice: [
        'G major',
        'F major',
        'D minor',
        'A minor'
        ],
      answer: 'D minor',
      questImg: 'http://www.guitar-chords.org.uk/chord-images/d-minor-1.gif',
      alt: 'guitar chord (low to high): string 6: do not play, string 5: do not play, string 4: open, string 3: fret 2, string 2: fret 3, string 1: fret 1',
      resultImg: 'https://www.uberchord.com/wp-content/uploads/2016/09/AdobeStock_98163865-1024x683.jpeg',
      alt2: 'Demonstration of hand position for D minor chord'
  },
  //Question 8 - G major
  {
    choice: [
        'A major',
        'F minor',
        'C major',
        'G major'
        ],
      answer: 'G major',
      questImg: 'http://www.guitar-chords.org.uk/chord-images/g-major-1.gif',
      alt: 'guitar chord (low to high): string 6: fret 3, string 5: fret 2, string 4: open, string 3: open, string 2: open , string 1: fret 1',
      resultImg: 'https://guitarlessons-com.s3.amazonaws.com/media/blog/g-major-chord-hr.png',
      alt2: 'Demonstration of hand position for G major chord'
  },
  //Question 9 - F major
  {
    choice: [
        'D major',
        'F major',
        'G major',
        'A major'
        ],
      answer: 'F major',
      questImg: 'http://www.guitar-chords.org.uk/chord-images/f-major-1.gif',
      alt: 'guitar chord (low to high): string 6: fret 1, string 5: fret 3, string 4: fret 3, string 3: fret 2, string 2: fret 1, string 1: fret 1',
      resultImg: 'https://www.uberchord.com/wp-content/uploads/2016/07/AdobeStock_98163941-1024x683.jpeg',
      alt2: 'Demonstration of hand position for F major bar chord'
  },
  //Question 10 - B major
  {
    choice: [
        'B major',
        'A minor',
        'E minor',
        'C major'
        ],
      answer: 'B major',
      questImg: 'http://www.guitar-chords.org.uk/chord-images/b-major-1.gif',
      alt: 'guitar chord (low to high): string 6: do not play, string 5: fret 2, string 4: fret 4, string 3: fret 4, string 2: fret 4, string 1: fret 2',
      resultImg: 'https://www.uberchord.com/wp-content/uploads/2016/08/AdobeStock_98163760-1024x683.jpeg',
      alt2: 'Demonstration of hand position for B major bar chord'
  },
  
  // How to read chord charts
  //img: 'https://www.theguitarlesson.com/wp-content/uploads/2013/05/how-to-read-chord-charts6.png'

  // User answers store for results page
  ];


  
  
