<script lang="ts">
import type { HTMLAttributes } from 'vue'

interface LoadingProps {
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
const props = defineProps<LoadingProps>()
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 80 80" :class="cn('size-12 grayscale', props.class)">
    <path
      class="shape shape-circle"
      fill="#2563EB"
      d="M61.433 51.345a9.076 9.076 0 11-18.152 0 9.076 9.076 0 0118.152 0z"
    />
    <path
      class="shape shape-square"
      fill="#0D9488"
      d="M18.567 24.117a4.538 4.538 0 014.538-4.538h9.076a4.538 4.538 0 014.538 4.538v9.076a4.538 4.538 0 01-4.538 4.538h-9.076a4.538 4.538 0 01-4.538-4.538v-9.076z"
    />
    <path class="shape shape-triangle" fill="#22D3EE" d="M27.643 43.485l9.076 15.72H18.567l9.076-15.72z" />
    <path
      class="shape shape-star"
      fill="#C084FC"
      d="M48.455 22.295c1.34-3.622 6.463-3.622 7.803 0a4.16 4.16 0 002.458 2.458c3.622 1.34 3.622 6.463 0 7.804a4.16 4.16 0 00-2.458 2.457c-1.34 3.622-6.463 3.622-7.803 0a4.16 4.16 0 00-2.458-2.457c-3.622-1.34-3.622-6.464 0-7.804a4.16 4.16 0 002.458-2.458z"
    />
  </svg>
</template>

<style>
/* The shapes swap positions clockwise around 4 positions:
     Top-Left (TL), Top-Right (TR), Bottom-Right (BR), Bottom-Left (BL)
     
     Each shape visits all 4 positions in sequence.
     We use CSS animations with translate to move each shape.
     
     Positions (center points of each shape area):
     - TL: ~27, ~28  (teal square center)
     - TR: ~52, ~28  (purple star center)  
     - BR: ~52, ~51  (blue circle center)
     - BL: ~27, ~51  (cyan triangle center)
     
     Offsets between positions:
     - TL to TR: +25, 0
     - TR to BR: 0, +23
     - BR to BL: -25, 0
     - BL to TL: 0, -23
  */

/* Animation timing:
     Total cycle = 4 swaps × (move + pause) 
     Move: 400ms, Pause: 600ms = 1000ms per step, 4000ms total
     
     Keyframe percentages:
     0%    = position 0 (pause)
     15%   = position 0 (start move)
     25%   = position 1 (end move, start pause)
     40%   = position 1 (start move)
     50%   = position 2 (end move, start pause)
     65%   = position 2 (start move)
     75%   = position 3 (end move, start pause)
     90%   = position 3 (start move)
     100%  = position 0 (back to start)
  */

.shape {
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear(
    0,
    1 44.7%,
    0.898 51.8%,
    0.874 55.1%,
    0.866 58.4%,
    0.888 64.3%,
    1 77.4%,
    0.98 84.5%,
    1
  );
}

/* Teal Square - starts TL, goes TL → TR → BR → BL → TL */
.shape-square {
  animation-name: move-square;
}

/* Purple Star - starts TR, goes TR → BR → BL → TL → TR */
.shape-star {
  animation-name: move-star;
}

/* Blue Circle - starts BR, goes BR → BL → TL → TR → BR */
.shape-circle {
  animation-name: move-circle;
}

/* Cyan Triangle - starts BL, goes BL → TL → TR → BR → BL */
.shape-triangle {
  animation-name: move-triangle;
}

/* Square: TL → TR → BR → BL → TL 
     TL = 0,0 | TR = +25,0 | BR = +25,+23 | BL = 0,+23 */
@keyframes move-square {
  0%,
  15% {
    transform: translate(0, 0);
  }
  25%,
  40% {
    transform: translate(25px, 0);
  }
  50%,
  65% {
    transform: translate(25px, 23px);
  }
  75%,
  90% {
    transform: translate(0, 23px);
  }
  100% {
    transform: translate(0, 0);
  }
}

/* Star: TR → BR → BL → TL → TR
     TR = 0,0 | BR = 0,+23 | BL = -25,+23 | TL = -25,0 */
@keyframes move-star {
  0%,
  15% {
    transform: translate(0, 0);
  }
  25%,
  40% {
    transform: translate(0, 23px);
  }
  50%,
  65% {
    transform: translate(-25px, 23px);
  }
  75%,
  90% {
    transform: translate(-25px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

/* Circle: BR → BL → TL → TR → BR
     BR = 0,0 | BL = -25,0 | TL = -25,-23 | TR = 0,-23 */
@keyframes move-circle {
  0%,
  15% {
    transform: translate(0, 0);
  }
  25%,
  40% {
    transform: translate(-25px, 0);
  }
  50%,
  65% {
    transform: translate(-25px, -23px);
  }
  75%,
  90% {
    transform: translate(0, -23px);
  }
  100% {
    transform: translate(0, 0);
  }
}

/* Triangle: BL → TL → TR → BR → BL
     BL = 0,0 | TL = 0,-23 | TR = +25,-23 | BR = +25,0 */
@keyframes move-triangle {
  0%,
  15% {
    transform: translate(0, 0);
  }
  25%,
  40% {
    transform: translate(0, -23px);
  }
  50%,
  65% {
    transform: translate(25px, -23px);
  }
  75%,
  90% {
    transform: translate(25px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
