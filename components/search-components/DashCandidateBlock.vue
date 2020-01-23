<template>
  <div class="dash-candidate-block">
    <div class="candidate-profile">
      <div class="candidate-info">
        <div class="candidate-avatar">
          <nuxt-link :to="{ name: 'Profile', params: { id: user.id }}">
            <img
              v-bind:src="imgUrl"
              alt="candidate avatar"
            >
          </nuxt-link>
          <div v-if="!user.attention" class="candidate-attention" />
          <div v-if="user.attention" class="candidate-attention attention-enable" />
        </div>
        <div class="candidate-about">
          <nuxt-link :to="{ name: 'Profile', params: { id: user.id }}">
            <div class="candidate-name">
              {{ user.name }}
            </div>
          </nuxt-link>
          <div class="candidate-position">
            {{ user.position }}
          </div>
          <a class="send-email" />
        </div>
      </div>
      <div @click="toShow" class="candidate-task-description">
        <div v-if="user.task.type === 'review'" class="task-icon task-icon-review" />
        <div v-if="user.task.type === 'decision'" class="task-icon task-icon-decision" />
        <div v-if="user.task.type === 'schedule'" class="task-icon task-icon-schedule" />
        <div v-if="user.task.type === 'test'" class="task-icon task-icon-test" />
        <div v-if="user.task.type === 'interview'" class="task-icon task-icon-interview" />
        <div v-if="user.task.type === 'waiting'" class="task-icon task-icon-waiting" />
        <div v-if="user.task.type === 'todo'" class="task-icon task-icon-todo" />
        <div class="task-description">
          <span>
            {{ user.task.description }}
          </span>
          <div class="task-description-arrow" />
        </div>
        <button class="interview-button" />
      </div>
    </div>
    <div v-if="seen" class="candidate-task-block">
      <CandidateTask :task="item" v-for="item in task" v-bind:key="item.id" />
    </div>
  </div>
</template>

<script>
import CandidateTask from './CandidateTask'

export default {
  components: {
    CandidateTask
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    task: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      ...this.task,
      seen: false,
      imgUrl: this.user.avatar
    }
  },
  methods: {
    toShow () {
      const arrow = this.$el.querySelector('.task-description-arrow')
      this.seen = !this.seen
      setTimeout(() => {
        if (this.seen) {
          arrow.classList.add('rotated-arrow')
        } else if (!this.seen) {
          arrow.classList.remove('rotated-arrow')
        }
      }, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/main.scss";

.dash-candidate-block {
  margin-bottom: 10px;
  color: $base-color;
  .candidate-profile {
    padding: 17px 25px 15px 17px;
    background-color: $white;
    display: flex;
    .candidate-info {
      width: 53%;
      display: flex;
      .candidate-avatar {
        position: relative;
        width: 82px;
        margin-right: 19px;
        a {
          display: block;
          max-height: 82px;
          overflow-y: hidden;
        }
        .candidate-attention {
          position: absolute;
          bottom: -7px;
          right: -11px;
          width: 32px;
          height: 32px;
          @include sprite($attention);
          display: none;
          &.attention-enable {
            display: block;
          }
        }
      }
      .candidate-about {
        max-height: 82px;
        line-height: 100%;
        .candidate-name {
          color: $color-primary;
          margin-bottom: 12px;
        }
        .candidate-position {
          font-size: 16px;
          font-weight: 400;
        }
        .send-email {
          width: 25px;
          height: 16px;
          margin-top: 17px;
          @include sprite($send_e-mail);
          display: block;
          cursor: pointer;
        }
      }
    }
    .candidate-task-description {
      width: 47%;
      display: flex;
      align-items: center;
      font-size: 16px;
      .interview-button {
        margin-right: 24px;
      }
      .task-icon {
        max-width: 30px;
        max-height: 40px;
        flex-shrink: 0;
        margin-right: 20px;
        &.task-icon-review {
          @include sprite($app_to_review);
        }
        &.task-icon-decision {
          @include sprite($question);
        }
        &.task-icon-schedule {
          @include sprite($calendar_2);
        }
        &.task-icon-test {
          @include sprite($send_test);
        }
        &.task-icon-interview {
          @include sprite($speach);
        }
        &.task-icon-waiting {
          @include sprite($waiting_test);
        }
        &.task-icon-todo {
          @include sprite($todo-icon);
        }
      }
      .task-description {
        width: 100%;
        padding-right: 66px;
        display: flex;
        align-items: center;
        cursor: pointer;
        span {
          position: relative;
          display: inline-block;
          padding-right: 20px;
        }
        .task-description-arrow {
          width: 8px;
          height: 8px;
          border-right: 1px solid $base-color;
          border-bottom: 1px solid $base-color;
          transform: rotate(45deg);
          transition: transform .3s ease;
          flex-shrink: 0;
          &.rotated-arrow {
            transform: rotate(225deg);
            transition: transform .3s ease;
          }
        }
        &:hover {
          color: $color-primary;
          .task-description-arrow {
            border-right: 1px solid $color-primary;
            border-bottom: 1px solid $color-primary;
          }
        }
      }
    }
  }
}
</style>
