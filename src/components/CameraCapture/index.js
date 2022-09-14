import React from "react";

class CameraCapture extends React.Component {
  constructor(props) {
    super(props);
    this.camera = React.createRef();
    this.download = React.createRef()
    this.canvas = React.createRef()
  }

  componentDidMount() {
    this.loadCamera();
  }

  

  captureImg(video) {
    this.canvas.current.getContext('2d').drawImage(video, 0, 0, 300, 300)
    console.log(this.canvas)
    const imgDataUrl = this.canvas.current.toDataURL()
    console.log(imgDataUrl)

    this.download.current.href = imgDataUrl
    this.download.current.download = 'picture.jpg'
    // this.download.current.target = '_blank'
    console.log(this.download)
    this.download.current.click()
  }

  loadCamera() {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      this.camera.current.srcObject = stream;
      this.camera.current.play()
      console.log(this.camera)
    });
  }

  render() {
    return (
      <>
        <video ref={this.camera} />
        <canvas ref={this.canvas} width="300" height="200"></canvas>
        <img className="changeCamera" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABh0lEQVRIie3VP0hVYRjH8c+xErqJNGQRRDk4iNLQ1JRTm0YQDmFIi5uji4QuDoLQENQo1FhDQnAlsEVwcnBpcfVa0JA0GCr+y4b3Pei9nrzvNUd/cDhwzvf9Pc953ud9DueqoyyRu40H8X4RFcxj9X8T6MZn7OOg5vqDMrpOaz6ErWi2jVm8wgRmsBHfbWGgUfOnR7J+i7YC5hqmI7OPx6nmt/A7LnyRwI9H9lcMWqULJyysYCQhwALu466wL/Mx4JnqYTT9jiVMoVQEtmMYrQ2YP8Ka6k5bxqVaMMNiBH7gubRz8s7xFu4rAgcKwDcJATKh677FNXNF0GVhU3PjHaGe9xIC5LqCQVw/+jDvomZcFepWQouwcUsNBNjFV+EA/lNNeC18xadE4yZ8xFhMrK5uYj0GGa3DZpiM7JriE1+ofodtN62mrlF38D4ye+hNNc/1DJsOB1oZL4USfhFqfiCMlSeNmufqFCZn0bjewQd0nGSQ+sO5gR5hEGZYEWbQz9Nkfa4q/QUscmjMbugXAQAAAABJRU5ErkJggg=="></img>
        <div onClick={() => this.captureImg(this.camera.current)} className="capture"></div>
        <a ref={this.download} download>
          <h1>klik aku</h1>
        </a>
      </>
    );
  }
}

export default CameraCapture;
