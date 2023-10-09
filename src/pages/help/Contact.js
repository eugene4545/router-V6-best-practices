import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
    const data = useActionData()
  return (
    <div className="contact">
        <Form method= "post" action="/help/contact">
            <label>
                <span>your Email</span>
                <input type="email" name="email" required />
            </label>

            <label>
                <span>Your Message</span>
                <textarea name="message" required></textarea>
            </label>
            <button>Submit</button>

            {data && data.error && <p>{data.error}</p>}
        </Form>
    </div>
    )
}

export const contactAction = async ({ request }) => {
   console.log(request)
    const data = await request.formData()

    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }
    console.log(submission)

    //send post request
    if (submission.message.length < 10) {
        return{error: 'message must be 10 characters long'}
    }

    //redirect the user
    return redirect('/')

}

