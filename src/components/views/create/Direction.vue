<template>
  <div class="direction">
    <div class="row">
      <button refDirection="to top left" @click="$emit('handleEditDirection', $event)">
        <i class="fas fa-sort-up to-top-left"></i>
      </button>
      <button refDirection="to top" @click="$emit('handleEditDirection', $event)">
        <i class="fas fa-sort-up"></i>
      </button>
      <button refDirection="to top right" @click="$emit('handleEditDirection', $event)">
        <i class="fas fa-sort-up to-top-right"></i>
      </button>
    </div>
    <div class="row">
      <button refDirection="to left" @click="$emit('handleEditDirection', $event)">
        <i class="fas fa-sort-up to-left"></i>
      </button>
      <button refDirection="to right" @click="$emit('handleEditDirection', $event)">
        <i class="fas fa-sort-up to-right"></i>
      </button>
    </div>
    <div class="row">
      <button refDirection="to bottom left" @click="$emit('handleEditDirection', $event)">
        <i class="fas fa-sort-down to-bottom-left"></i>
      </button>
      <button refDirection="to bottom" @click="$emit('handleEditDirection', $event)">
        <i class="fas fa-sort-down"></i>
      </button>
      <button refDirection="to bottom right" @click="$emit('handleEditDirection', $event)">
        <i class="fas fa-sort-down to-bottom-right"></i>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/master';

.direction {
  opacity: 0;
  position: absolute;
  width: 60px;
  height: 60px;
  transition: 0.3s ease;
}

.row {
  width: 100%;
  height: 33.3%;

  &:first-child {
    button:nth-child(even) {
      position: relative;
      top: -1em;
    }
  }

  &:last-child {
    button:nth-child(even) {
      position: relative;
      top: 1em;
    }
  }

  &:nth-child(even) {
    width: 100%;

    button {
      width: 50%;

      &:first-child i {
        position: relative;
        left: -0.5em;
      }

      &:last-child i {
        position: relative;
        left: 0.5em;
      }
    }
  }
}

button {
  background: 0;
  border: 0;
  padding: 0.5em 0;
  width: 33.3%;
  height: 100%;
  opacity: .5;
  transition: 0.3s ease;

  &:nth-child(even) {
    border-left: 0;
    border-right: 0;
  }

  &:hover {
    opacity: 1;
  }
}

i {
  font-size: 48px;
}

.to-top-left, .to-bottom-right {
  transform: rotate(-45deg);
}

.to-top-right, .to-bottom-left {
  transform: rotate(45deg);
}

.to-left {
  transform: rotate(-90deg);
}

.to-right {
  transform: rotate(90deg);
}
</style>
