#lang racket

(define (notegen)
  (printf "THE AGGRESSIVE NOTE GENERATOR\n")
  (printf "Now is the time to strike back...with prose.\n")
  (printf "Who is the offender?\n")
  (define perp (read))
  (printf "What crime did they commit? Please answer the following: 'They ___ed for the last time!'\n")
  (define crime (read))
  (printf "Finally, what is your name? If you'd like to remain anonymous, feel free to insert a nickname.\n")
  (define writer (read))
  (printf "How does this sound?\n")
  (printf "Dear ~a, if you ~a ever again I may have to take drastic measures. Sincerely, ~a\n" perp crime writer)
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