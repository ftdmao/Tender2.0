<template>
    <Card>
      <Form ref="infoPublishModel" :model="infoPublishModel" :label-width="150">
        <FormItem label="信息发布标题:">
          <Input style="width: 50%" v-model="infoPublishModel.title" :readonly="true"></Input>
        </FormItem>
        <FormItem label="是否有附件:">
          <RadioGroup v-model="infoPublishModel.isWithFile">
            <Radio label="Y" disabled>是</Radio>
            <Radio label="N" disabled>否</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="是否需要回复附件:">
          <RadioGroup v-model="infoPublishModel.isNeedAnswer">
            <Radio label="Y" disabled>是</Radio>
            <Radio label="N" disabled>否</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="回复附件要求:">
          <Input style="width: 50%" v-model="infoPublishModel.demand" :readonly="true"></Input>
        </FormItem>
        <FormItem label="回复附件截止日期:">
          <Input style="width: 50%" v-model="infoPublishModel.deadline" :readonly="true"></Input>
        </FormItem>
        <FormItem label="信息发布内容:">
          <textarea  v-model="infoPublishModel.content" style="width: 100%; height: 240px; resize: none;" :readonly="true"></textarea>
        </FormItem>
      </Form>
      <div style="margin-left: 150px">
        <Button :size="buttonSize" icon="ios-download-outline" type="primary">下载附件</Button>
        <Button :size="buttonSize" icon="ios-cloud-upload" type="primary">上传附件</Button>
      </div>
    </Card>
</template>

<script>
export default {
  name: 'info-publish',
  data () {
    return {
      infoPublishModel: {
        title: '33333',
        isWithFile: 'Y',
        isNeedAnswer: 'N',
        demand: '',
        deadline: '',
        content: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
