{
showModal && (

<div
className="modal"
onClick={()=>setShowModal(false)}
>

<div
className="modal__content"
onClick={(e)=>e.stopPropagation()}
>

<button
onClick={()=>
setCurrentImage(
(currentImage-1+PROJECTS[current].images.length)
%
PROJECTS[current].images.length
)
}
>
❮
</button>

<img
src={
PROJECTS[current].images[currentImage]
}
alt=""
/>

<button 
onClick={()=>
setCurrentImage(
(currentImage+1)
%
PROJECTS[current].images.length
)

}
>
❯
</button>

</div>

</div>

)
}