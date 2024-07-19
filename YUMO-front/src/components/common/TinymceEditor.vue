<template>
  <div>
    <Editor v-model="content" :init="init" />
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

import tinymce from 'tinymce/tinymce';
import Editor from '@tinymce/tinymce-vue';

/* 加载tiny */
tinymce.baseURL = 'tinymce';

/* 初始化 */
const content = ref<string>('');
const init = ref(
    {
      placeholder: '在这里输入文字',
      language_url: '/tinymce/langs/zh-Hans.js', // 汉化路径
      language: 'zh-Hans',
      skin_url: '/tinymce/skins/ui/oxide',
      height: window.innerHeight - 50, // 编辑器高度，可以考虑获取窗口高度，以适配不同设备屏幕
      end_container_on_empty_block: true,
      powerpaste_word_import: 'clean',
      advlist_bullet_styles: 'square',
      advlist_number_styles: 'default',
      imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
      default_link_target: '_blank',
      link_title: false,
      media_live_embeds: true,
      content_style:
          'img {max-width:100%;} html{background-color: #fff; padding: 0 100px}', // 直接自定义可编辑区域的css样式
      images_upload_url: '/api/attch/upload', //图片服务器地址
      image_advtab: false, // 禁用高级选项卡，其中包括大小调整
      image_resize: false, // 禁用图片大小调整功能
      nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
      plugins:
          'accordion advlist anchor autolink autoresize autosave charmap code codesample directionality emoticons fullscreen help image importcss insertdatetime link lists media nonbreaking pagebreak preview quickbars save searchreplace table template visualblocks visualchars wordcount',
      toolbar: [
        'accordion advlist anchor autolink autoresize autosave charmap code codesample directionality emoticons fullscreen help image importcss insertdatetime link lists media nonbreaking pagebreak preview quickbars save searchreplace table template visualblocks visualchars wordcount'
      ],

      // toolbar: [
      //   'save | undo redo |  bold italic underline strikethrough subscript superscript backcolor ',
      // ],
      save_enablewhendirty: false, //设置为true时，编辑器内容无变化则按钮显示禁用状态
      save_onsavecallback: function () {
        // 保存功能的回调函数
        saveDoc()
      },
      fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt', // 第二步
      font_formats:
          "微软雅黑='微软雅黑';宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';隶书='隶书';幼圆='幼圆';Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings",
      branding: false,
      elementpath: false, //隐藏底栏的元素路径
      file_picker_types: 'media',
    },
)
const saveDoc = () => {}

</script>

<style scoped lang="scss">
</style>