<template>
  <div class="candidate-task">
    <div class="candidate-task-block">
      <div class="candidate-stage-icon">
        <img
          v-if="task.type !== 'offer'"
          src="/stage.png"
        >
      </div>
      <div v-if="!task.status" class="candidate-task-info centered">
        <p class="candidate-task-tittle">
          {{ task.tittle }}
        </p>
      </div>
      <div v-else="" class="candidate-task-info">
        <p class="candidate-task-tittle">
          {{ task.tittle }}
        </p>
        <p v-if="task.status" class="candidate-task-status">
          {{ task.status }}
        </p>
      </div>
    </div>
    <div v-if="task.type === 'offer'" class="offer-options">
      <a class="accept-button">
        <div class="accept-button-arrow" />
        Advance
      </a>
      <a class="decline-button">
        <div class="decline-button-cross" />
        Reject
      </a>
    </div>
    <div v-else="" class="candidate-task-options">
      <div v-if="task.interview" class="candidate-interviewed">
        <div v-if="task.interview.answer === 'yes'" class="response-yes">
          <img :src="require('@/assets/images/sprites_icons/response_yes.png')" alt="">
          <span>Strong Yes</span>
        </div>
        <div class="interviewer-block">
          <img :src="task.interview.interviewerPhoto" alt="interviewer">
          <div class="candidate-interviewer">
            <span>interviewer</span>
            <span>{{ task.interview.interviewerName }}</span>
          </div>
        </div>
        <button class="task-option-button scorecard-button" />
        <button class="interview-button" />
      </div>
      <button v-if="hiddenType" class="interview-button" />
      <button v-if="task.type === 'review'" class="task-option-button review-button" />
      <div v-if="task.type === 'scheduled'" class="task-scheduled">
        <button class="task-option-button schedule-button" />
        <button class="task-option-button remove-interview-button" />
      </div>
      <button v-if="task.type === 'test'" class="task-option-button send-test-button" />
      <button v-if="task.type === 're-schedule'" class="task-option-button reschedule-button" />
      <button v-if="task.type === 'reminder'" class="reminder-button">
        Send Reminder
      </button>
      <button v-if="task.type === 'vendor'" class="contact-vendor">
        Contact Vendor
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  computed: {
    hiddenType () {
      return this.task.type !== 'reminder' && this.task.type !== 'offer' && this.task.type !== 'interview'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/main.scss";

.candidate-task {
  padding: 28px 25px 25px 17px;
  background-color: $task-background;
  display: flex;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 13px;
    width: calc(100% - 36px);
    height: 1px;
    background-color: #cecece;
  }
  &:first-child {
    &::after {
      display: none;
    }
  }
  p {
    margin-bottom: 0;
  }
  .candidate-task-block {
    padding-left: 8px;
    display: flex;
    width: 53%;
    .candidate-stage-icon {
      width: 43px;
      height: 43px;
      margin-right: 26px;
    }
    .candidate-task-info {
      .candidate-task-tittle {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 4px;
      }
      .candidate-task-status {
        font-size: 14px;
        font-weight: 400;
      }
      &.centered {
        display: flex;
        align-items: center;
      }
    }
  }
  .offer-options {
    display: flex;
    padding-left: 5px;
    .accept-button, .decline-button {
      width: 130px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 56px;
    }
    .accept-button-arrow {
      width: 18px;
      height: 13px;
      position: relative;
      margin-right: 10px;
      &::before {
        content: "";
        position: absolute;
        top: 40%;
        left: 0;
        width: 14px;
        height: 3px;
        border-radius: 1px;
        background-color: $white;
      }
      &::after {
        content: "";
        position: absolute;
        width: 9px;
        height: 9px;
        transform: rotate(45deg);
        border-top: 3px solid $white;
        border-right: 3px solid $white;
        border-radius: 1px;
        right: 3px;
        top: 2px;
      }
    }
    .accept-button {
      &:hover {
        .accept-button-arrow {
          &::before {
            background-color: $color-primary;
          }
          &:after {
            border-color: $color-primary;
          }
        }
      }
    }
    .decline-button {
      &-cross {
        width: 15px;
        height: 15px;
        position: relative;
        margin-right: 14px;
        &::before, &::after {
          content: "";
          position: absolute;
          top: -2px;
          height: 20px;
          width: 3px;
          background-color: $white;
          border-radius: 1px;
        }
        &::before {
          transform: rotate(-45deg);
          left: 6px;
        }
        &:after {
          transform: rotate(45deg);
          right: 6px;
        }
      }
      &:hover {
        .decline-button-cross {
          &::before, &::after {
            background-color: $secondary-link-color;
          }
        }
      }
    }
  }
  .candidate-task-options {
    display: flex;
    width: 47%;
    align-items: center;
    justify-content: flex-end;
    .interview-button {
      margin-right: 45px;
    }
    .candidate-interviewed {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .response-yes {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;
        margin-left: -10px;
        img {
          max-width: 40px;
          max-height: 43px;
        }
        span {
          font-size: 10px;
          color: #7fb04a;
          line-height: 100%;
        }
      }
      .interviewer-block {
        display: flex;
        margin: 0 10px;
        img {
          width: 50px;
          height: 50px;
        }
        .candidate-interviewer {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-left: 15px;
          font-weight: 400;
          font-size: 16px;
          padding-top: 15px;
          span {
            white-space: nowrap;
          }
          span:first-child {
            color: #babcbc;
            font-size: 14px;
          }
        }
      }
      .scorecard-button {
        flex-shrink: 0;
        @include sprite($scorecard);
        position: relative;
        &::after {
          content: "View Scorecard";
          width: 110%;
        }
      }
      .interview-button {
        margin-right: 0;
      }
    }
    .review-button {
      @include sprite($review_app);
      margin-right: 19px;
      &::after {
        content: "Review Application";
        width: 200%;
        right: -50%;
      }
    }
    .task-scheduled {
      width: 30%;
      display: flex;
      justify-content: space-between;
      .schedule-button {
        @include sprite($schedule);
        margin-right: 10px;
        &::after {
          content: "schedule an interview";
          width: 300%;
          right: -100%;
        }
      }
      .remove-interview-button {
        @include sprite($trash);
        margin-left: 10px;
        margin-right: 8px;
        &::after {
          content: "remove the interview";
          color: #757575;
          width: 200%;
          right: -45%;
        }
      }
    }
    .send-test-button {
      @include sprite($send_test_blue);
      max-height: 36px;
      &::after {
        content: "send a test";
        width: 150%;
        right: -20%;
      }
    }
    .reschedule-button {
      @include sprite($re_schedule);
      &::after {
        content: "Re-Schedule Interview";
        width: 150%;
        right: -20%;
      }
    }
  }
}
</style>
