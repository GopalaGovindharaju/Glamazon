import React from 'react'

function Selection() {
  return (
    <div>
      <form class="box" method="post" action="" enctype="multipart/form-data">
  <div class="box__input">
    <input class="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
    <label for="file"><strong>Choose a file</strong><span class="box__dragndrop"style={{display: 'none'}}> or drag it here</span>.</label>
    <button class="box__button" type="submit">Upload</button>
  </div>
  <div class="box__uploading" style={{display: 'none'}}>Uploading…</div>
  <div class="box__success" style={{display: 'none'}}>Done!</div>
  <div class="box__error" style={{display: 'none'}}>Error! <span></span>.</div>
</form>
    </div>
  )
}

export default Selection
