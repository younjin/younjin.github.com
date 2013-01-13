#lang racket

(define (notegen)
  (printf "THE AGGRESSIVE NOTE GENERATOR, v.2\n")
  (printf "Now is the time to strike back...with prose.\n")
  (printf "Who is the offender?\n")
  (define perp (read))
  (printf "What heinous crime did they commit?\n")
  (printf "Fill in the blank: 'They will ___ for the last time!'\n")
  (printf "Fit the crime to one word: e.g. 'poop', 'fart', or put quotes around it \"have loud sex\"\n")
  (define crime (read))
  (printf "What is your name? If you'd like to remain anonymous, feel free to insert a nickname.\n")
  (define writer (read))
  (printf "Finally, rate the severity of the crime from 1/2/3, 3 being the most unforgivable.\n")
  (define sev (read))
  (printf "How does this sound?\n")
  (cond
    [(= sev 3) (printf "Dear ~a,

Lately, your tendency to ~a has made me consider taking up homicide as a hobby...and you've been voluntold! Congratulations!
(Remember, I know where you sleep at night...)

With love,
-- ~a\n" perp crime writer)]
    [(= sev 2) (printf "Dear ~a,

\n ... ~a ...

Sincerely,
-- ~a\n" perp crime writer)]
    [(= sev 1) (printf "Dear ~a,
 
Remember Mr. Teddy? Your best friend from childhood? Yeah...well, Mr. Teddy has a message for you.
 ~a ... \n\n Sincerely, \n -- ~a\n" perp crime writer)])
  (printf "Does this sound good to you? Y/N\n")
  (define satisfaction (read))
  (cond
    [(symbol=? 'N satisfaction)
     (printf "Do you want to try again? Y/N\n")
     (define reply (read))
     (cond
       [(symbol=? 'Y reply) (notegen)]
       [else (printf "Thanks for playing!\n")])]
    [else (printf "Thanks for playing!\n")]))

(notegen)

; #lang racket
; It is respectful to confine your sexual activities to hours when your roommate(s) is/are not home.
; Who brought you guys up to be so ---?
; If you don't ... I'm going to burn your childhood home to the ground. LOL! XD !!!
; The next person who ... is going to be in for a nasty surprise.
; Let's play the quiet game. First person to lose gets a (fistful of poop/steak knife/nerf bullet) to the eye. JK!
; If ..., (threat). LOL! JK!