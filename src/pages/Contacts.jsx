import styled from 'styled-components';
const Wrapper = styled.section`
  padding: 8rem 1rem;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  color: rgba(214, 212, 142, 1);
  h3 {
    font-size: 1.8rem;
    padding: 0.5rem 0;
    text-align: center;
  }
  p {
    font-size: 1.3rem;
    padding: 1.5rem 0;
    text-align: center;
  }

  .form {
    display: flex;
    flex-flow: column wrap;
    padding: 2rem;
    background: rgba(0, 91, 82, 0.04);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.6px);
    -webkit-backdrop-filter: blur(2.6px);
    border: 1px solid rgba(0, 91, 82, 0.3);
  }

  label {
  }
  input {
    padding: 0.3rem;
    border-radius: 5px;
    border: none;
  }
  textarea {
    height: 200px;
    border-radius: 5px;
    padding: 0.3rem;
  }
  button {
    width: 150px;
    padding: 0.8rem;
    margin: 1rem auto 0;
    border-radius: 10px;
    border: none;
    outline: none;
    color: rgba(0, 91, 82, 1);
    background-color: rgba(219, 242, 38, 1);
    font-weight: bold;
  }

  @media (min-width: 865px) {
    padding: 20rem 0;
  }
`;

const Contacts = () => {
  return (
    <Wrapper>
      <h3>Contact</h3>
      <p>
        Please contact me by filling the form below, and I will reply as quickly
        as possible.
      </p>
      <div className='form'>
        <label htmlFor='name'>Name</label>
        <input type='email' placeholder='Enter Name' />
        <label htmlFor='name'>Email</label>
        <input type='text' placeholder='Enter Email' />
        <label htmlFor='name'>Message</label>
        <textarea type='text' placeholder='Enter Message' />
        <button type='button'>Submit</button>
      </div>
    </Wrapper>
  );
};
export default Contacts;
