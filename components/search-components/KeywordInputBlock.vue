<template>
  <div>
    <KeywordInput ref="keyword" v-if="type === 'withKey'" :inputParam="addKeyword" :type="type" />
    <KeywordInput ref="wKeyword" v-if="type === 'withoutKey'" :inputParam="addWithoutKeyword" :type="type" />
    <KeywordInput ref="skills" v-if="type === 'withSkills'" :inputParam="addSkills" :type="type" />
    <KeywordInput ref="wSkills" v-if="type === 'withoutSkills'" :inputParam="addWithoutSkills" :type="type" />
    <EducationSelectBlock v-if="type === 'withEducation'" :inputParam="addEducation" />
    <KeywordInput ref="attribute" v-if="type === 'withAttribute'" :inputParam="addAttributes" :type="type" />
    <KeywordInput ref="wAttribute" v-if="type === 'withoutAttribute'" :inputParam="addWithoutAttributes" :type="type" />
    <KeywordInput v-if="type === 'schedule'" :inputParam="addProgress" :type="type" />
    <KeywordInput v-if="type === 'interviewed'" :inputParam="addInterviewed" :type="type" />
    <div>
      <div v-if="isChecked" class="checkbox-signs">
        <span>Note</span>
        <span>Feedback</span>
      </div>
      <KeywordBlock :item="keyword" v-for="(keyword, index) in searchParams.keywords" :key="keyword.id" v-on:delete-keyword="deleteKeyword(index)" />
      <KeywordBlock :item="keyword" v-for="(keyword, index) in searchParams.wKeywords" :key="keyword.id" v-on:delete-keyword="deleteWKeyword(index)" />
      <KeywordBlock :item="keyword" v-for="(keyword, index) in searchParams.skills" :key="keyword.id" v-on:delete-keyword="deleteSkill(index)" />
      <KeywordBlock :item="keyword" v-for="(keyword, index) in searchParams.wSkills" :key="keyword.id" v-on:delete-keyword="deleteWSkill(index)" />
      <KeywordBlock :item="keyword" v-for="(keyword, index) in searchParams.attributes" :key="keyword.id" v-on:delete-keyword="deleteAttribute(index)" />
      <KeywordBlock :item="keyword" v-for="(keyword, index) in searchParams.wAttributes" :key="keyword.id" v-on:delete-keyword="deleteWAttribute(index)" />
      <KeywordBlock :item="keyword" v-for="(keyword, index) in searchParams.progress" :key="keyword.id" v-on:delete-keyword="deleteProgress(index)" />
      <KeywordBlock :item="keyword" v-for="(keyword, index) in searchParams.interviewed" :key="keyword.id" v-on:delete-keyword="deleteInterviewed(index)" />
    </div>
  </div>
</template>

<script>
import KeywordBlock from './KeywordBlock'
import KeywordInput from './KeywordInput'
import EducationSelectBlock from './EducationSelectBlock'

export default {
  components: {
    KeywordBlock,
    KeywordInput,
    EducationSelectBlock
  },
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      searchParams: {
        keywords: [],
        wKeywords: [],
        skills: [],
        wSkills: [],
        education: [],
        attributes: [],
        wAttributes: [],
        progress: [],
        interviewed: []
      }
    }
  },
  computed: {
    isChecked () {
      return this.searchParams.keywords.length !== 0 || this.searchParams.wKeywords.length !== 0
    }
  },
  methods: {
    addKeyword (e) {
      const inputed = this.$refs.keyword.$refs.keyword.value
      const keyId = this.searchParams.keywords.length + 1
      const keyword = {
        id: keyId,
        text: inputed,
        check: {
          note: {
            id: `${keyId}note`,
            checked: false
          },
          feedback: {
            id: `${keyId}feedback`,
            checked: false
          }
        }
      }
      this.searchParams.keywords.push(keyword)
      this.$refs.keyword.$refs.keyword.value = ''
    },
    addWithoutKeyword (e) {
      const inputed = this.$refs.wKeyword.$refs.keyword.value
      const keyId = this.searchParams.wKeywords.length + 1
      const keyword = {
        id: keyId,
        text: inputed,
        check: {
          note: {
            id: `${keyId}note`,
            checked: false
          },
          feedback: {
            id: `${keyId}feedback`,
            checked: false
          }
        }
      }
      this.searchParams.wKeywords.push(keyword)
      this.$refs.wKeyword.$refs.keyword.value = ''
    },
    addSkills (e) {
      const inputed = this.$refs.skills.$refs.keyword.value
      const keyId = this.searchParams.skills.length + 1
      const keyword = {
        id: keyId,
        text: inputed
      }
      this.searchParams.skills.push(keyword)
      this.$refs.skills.$refs.keyword.value = ''
    },
    addWithoutSkills (e) {
      const inputed = this.$refs.wSkills.$refs.keyword.value
      const keyId = this.searchParams.wSkills.length + 1
      const keyword = {
        id: keyId,
        text: inputed
      }
      this.searchParams.wSkills.push(keyword)
      this.$refs.wSkills.$refs.keyword.value = ''
    },
    addEducation (e) {
      this.searchParams.education.push(e)
    },
    addAttributes (e) {
      const inputed = this.$refs.attribute.$refs.keyword.value
      const keyId = this.searchParams.attributes.length + 1
      const keyword = {
        id: keyId,
        text: inputed
      }
      this.searchParams.attributes.push(keyword)
      this.$refs.attribute.$refs.keyword.value = ''
    },
    addWithoutAttributes (e) {
      const inputed = this.$refs.wAttribute.$refs.keyword.value
      const keyId = this.searchParams.wAttributes.length + 1
      const keyword = {
        id: keyId,
        text: inputed
      }
      this.searchParams.wAttributes.push(keyword)
      this.$refs.wAttribute.$refs.keyword.value = ''
    },
    addProgress (time, e = time) {
      const keyId = this.searchParams.progress.length + 1
      const keyword = {
        id: keyId,
        text: e,
        date: time,
        timed: false
      }
      this.searchParams.progress.push(keyword)
    },
    addInterviewed (time, e = time) {
      const keyId = this.searchParams.interviewed.length + 1
      const keyword = {
        id: keyId,
        text: e,
        date: time,
        timed: false
      }
      this.searchParams.interviewed.push(keyword)
    },
    deleteKeyword (index) {
      this.searchParams.keywords.splice(index, 1)
    },
    deleteWKeyword (index) {
      this.searchParams.wKeywords.splice(index, 1)
    },
    deleteSkill (index) {
      this.searchParams.skills.splice(index, 1)
    },
    deleteWSkill (index) {
      this.searchParams.wSkills.splice(index, 1)
    },
    deleteAttribute (index) {
      this.searchParams.attributes.splice(index, 1)
    },
    deleteWAttribute (index) {
      this.searchParams.wAttributes.splice(index, 1)
    },
    deleteProgress (index) {
      this.searchParams.progress.splice(index, 1)
    },
    deleteInterviewed (index) {
      this.searchParams.interviewed.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/main.scss";

.checkbox-signs {
  display: flex;
  justify-content: flex-end;
  margin-top: -10px;
  padding-right: 5px;
  line-height: 100%;
  font-size: 10px;
  color: #6a7786;
  text-transform: uppercase;
  span {
    padding-right: 14px;
  }
}
</style>
